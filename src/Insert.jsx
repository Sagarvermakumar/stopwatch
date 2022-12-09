import { useEffect, useState } from "react";
import app from "./firebase/config";
import {
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
  ref,
  deleteObject,
} from "firebase/storage";
import { child, get, getDatabase, remove } from "firebase/database";
import { set, ref as rdbf } from "firebase/database";
import Cards from "./components/Card";
import { Box } from "@mui/system";
import currentDate from "./date";
import { Grid, Paper, styled } from "@mui/material";

const db = getDatabase(app);
const storage = getStorage(app);

//items
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Insert = () => {
  // State to store uploaded file
  const [file, setFile] = useState("");
  const storageRef = ref(storage, `/Slapsh/${file.name}`);
  // progress
  const [percent, setPercent] = useState(0);
  const [cards, setCards] = useState([]);

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const handleUpload = () => {
    // write data
    if (!file) {
      alert("Please upload an image first!");
    }

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => alert(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          const uid = new Date().getTime();
          set(rdbf(db, `/Slapsh/${uid}/`), {
            date: currentDate,
            seq: uid,
            img: url,
          });
          alert("Inserted Succssfully");
        });
      }
    );
  };
  // read data
  useEffect(() => {
    const dbRef = rdbf(db);
    get(child(dbRef, `Slapsh/`))
      .then((snapshot) => {
        const data = snapshot.val();
        if (snapshot.exists()) {
          setCards([]);
          Object.values(data).map((cards) => {
            return setCards((oldCard) => [...oldCard, cards]);
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const deleteItems = (id) => {
    deleteObject(storageRef)
      .then(() => {
        alert("url deleted");
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
    remove(rdbf(db, `Slapsh/${cards[id].seq}`));
  };
  return (
    <Box m="20px" width="70%">
      <input type="file" onChange={handleChange} accept="/image/*" />
      <button onClick={handleUpload}>Upload</button>
      <p>{percent} "% done"</p>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            {cards.map((card, index) => {
              return (
                <Cards
                  img={card.img}
                  date={card.date}
                  deleteItem={() => {
                    deleteItems(index);
                  }}
                />
              );
            })}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Insert;
