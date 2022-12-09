import { Box } from "@mui/material";
import Card from "./../../components/Card"
import Header from "./../../components/Header"
const Award = () => {
  return (
    <Box m="20px">
      <Header title="ADD SERVICES" subtitle="Add your services" />
      <Box display="flex" gap justifyContent="space-between" flexWrap="wrap">        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </Box>

  )
}

export default Award;