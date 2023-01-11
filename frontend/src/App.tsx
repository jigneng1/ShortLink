import {
  Box,
  Link,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { theme1 } from "./components/muiTheme";
import { useState } from "react";
import axios from "axios";
import { SERVER_ENDPOINTS } from "./config";

export default function App() {
  const [url, seturl] = useState("");
  const [link, setlink] = useState("");
  const [urlwa, seturlwa] = useState("");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //function
  function onSend() {
    axios
      .post(`/api/short`, { origUrl: url, path: link })
      .then((e) => seturlwa(e.data.urlId))
      .then(() => handleOpen())
      .catch((error) => alert("ใส่ url ผิดคั้บ"));
    setlink("")
    seturl("")
  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="border-zinc-900  bg-slate-50 absolute top-2/4 left-2/4 p-4 -translate-y-2/4 -translate-x-2/4 rounded-md ">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Congratulation 🌈🎉
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            this is your shortURL
          </Typography>
          <Box className="mt-2">
            <Link href={`https://s.stthi.com/${urlwa}`} rel="noopener" target={"_blank"}>{`https://s.stthi.com/${urlwa}`}</Link>
          </Box>
        </Box>
      </Modal>
      <ThemeProvider theme={theme1}>
        <div className="container mx-auto h-screen w-screen flex justify-center items-center">
          <div className="">
            <p className=" mb-3 font-bold text-black tracking-wide text-3xl md:text-5xl text-center md:text-left">
              stthi url shortener ☁️
            </p>
            <div className="flex mb-4">
              <div className=" mr-5">
                <TextField
                  id="outlined-basic"
                  label="Enter your url"
                  variant="outlined"
                  size={isSmallScreen ? "small" : "medium"}
                  value={url}
                  className="w-80 md:w-96"
                  onChange={(e) => {
                    seturl(e.target.value);
                  }}
                />
              </div>
              <div>
                <TextField
                  className="w-28"
                  id="outlined-basic"
                  label="Path"
                  variant="outlined"
                  size={isSmallScreen ? "small" : "medium"}
                  value={link}
                  onChange={(e) => {
                    setlink(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className={`${
                  url ? "bg-blue-400" : "bg-red-400"
                } text-white p-3 rounded-md mr-3 transition ease-in-out delay-50  hover:scale-110`}
                disabled={!url}
                onClick={onSend}
              >
                Get shorten url
              </button>
              <button className="bg-gray-500 text-white p-3 rounded-md">
                Retrieve original url
              </button>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
