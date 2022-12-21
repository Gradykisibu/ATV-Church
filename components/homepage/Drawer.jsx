import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import styles from "../../styles/Banner.module.css";
import Link from "next/link";
import Image from 'next/image'


export default function Drawer() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <Box>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          sx={{flexDirection:"column"}}
        >
        <Box sx={{width:"40px",height:"3px", background:"white"}}></Box>
        <Box sx={{width:"40px",height:"3px", background:"white", marginTop:"3px"}}></Box>
        </Button>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          sx={{ position: "relative"}}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left bottom" : "left bottom",
              }}
            >
              <Box
                sx={{
                  background: "white",
                  color: "#42475B",
                  border: "none",
                  fontWeight: "bold",
                  height: "500px",
                  width: "270px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  fontWeight: "bold",
                  boxShadow: "8px 10px 5px 0px rgba(0,0,0,0.25)",
                  paddingLeft: "20px",
                  paddingBottom: "40px",
                  marginRight:"13px",border:"1px solid white"
                }}
                className={styles.BannerDrawer1}
              >
                <Box className={styles.DrawerCircle}>
                  <label for="" className={styles.circle1}>
                    <Image
                      src="/Ellipse28.png"
                      alt="drawerCirlce"
                      width={35}
                      height={70}
                    />
                  </label>
                  <label for="" className={styles.circle2}>
                    <Image
                      src="/Ellipse29.png"
                      alt="drawerCircle"
                      width={50}
                      height={50}
                    />
                  </label>
                </Box>
                <Box>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                      sx={{
                        marginTop: "9px",
                        height: "500px",
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                      }}
                    >
                      <MenuItem className="typeText" sx={{ fontSize: "18px" }}>
                        <Link href="/" style={{ color: "#42475B", textDecoration:"none"}}>
                          <p>
                            {"The Active church"}
                          </p>
                        </Link>
                      </MenuItem>
                      <MenuItem className="typeText" sx={{ fontSize: "18px" }}>
                        <Link href="/sermons" style={{ color: "#42475B", textDecoration:"none"}}>
                        <p>
                        {"Sermon"}
                        </p>
                        </Link>
                      </MenuItem>
                      <MenuItem className="typeText" sx={{ fontSize: "18px" }}>
                      <Link href="/" style={{ color: "#42475B", textDecoration:"none"}}>
                        <p>
                       {" Children's church"}
                        </p>
                      </Link>
                      </MenuItem>
                      <MenuItem className="typeText" sx={{ fontSize: "18px" }}>
                      <Link href="/" style={{ color: "#42475B", textDecoration:"none"}}>
                        <p>
                        {"Active Worship"}
                        </p>
                      </Link>
                      </MenuItem>
                      <MenuItem className="typeText" sx={{ fontSize: "18px" }}>
                        <Link href="/" style={{ color: "#42475B", textDecoration:"none"}}>
                        <p>
                        {"Active Foundation"}
                        </p>
                        </Link>
                      </MenuItem>
                      <MenuItem className="typeText" sx={{ fontSize: "18px" }}>
                      <Link href="/" style={{ color: "#42475B", textDecoration:"none"}}>
                        <p>
                        {"Events"}
                        </p>
                        </Link>
                      </MenuItem>
                      
                      <MenuItem className="typeText" sx={{ fontSize: "18px" }}>
                      <Link href="/MoreInfo" style={{ color: "#42475B", textDecoration:"none"}}>
                        <p>
                       {" About Us"}
                        </p>
                        </Link>
                      </MenuItem>

                      <MenuItem className="typeText" sx={{ fontSize: "18px" }}>
                      <Link href="/" style={{ color: "#42475B", textDecoration:"none"}}>
                        <p>
                        {"Contact Page"}
                        </p>
                        </Link>
                      </MenuItem>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          justifyContent: "space-evenly",
                          marginTop: "60px",
                          marginBottom: "20px",
                        }}
                      >
                        <Link href="https://www.instagram.com/theactivechurch_/">
                          <InstagramIcon
                            sx={{ fontSize: "20px", color: "black" }}
                          />
                        </Link>

                        <Link href="https://www.twitter.com/theactivechurch">
                          <TwitterIcon
                            sx={{ fontSize: "20px", color: "black" }}
                          />
                        </Link>

                        <Link href="https://www.facebook.com/ActiveWorship">
                          <FacebookIcon
                            sx={{ fontSize: "20px", color: "black" }}
                          />
                        </Link>
                      </Box>
                    </MenuList>
                  </ClickAwayListener>
                </Box>
              </Box>
            </Grow>
          )}
        </Popper>
      </Box>
    </Stack>
  );
}
