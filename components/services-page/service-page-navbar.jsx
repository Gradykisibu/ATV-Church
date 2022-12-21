import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../styles/Services.module.css";
import Link from "next/link";
import { handleNav } from "../../utils/navigation";
const displayText = "bauhaus-93";
const typeText = "baumans";
import { useRouter } from "next/router";
import {AppContext} from '../../context/app-context'
import Image from 'next/image'

function ServicePageNavBar() {
  const router = useRouter();
  const {Events} = React.useContext(AppContext)
  return (
    <Box className={styles.navBar}>
      <Link href="/">
        <Image className={styles.logo}
          src="/the-active-church white.png"
          width={90}
          alt="church Logo"
          height = {50}
          />
      </Link>
      <Box className={styles.navlinks}>
        <Link href="/" style={style.link}>
          <Typography sx={style.navLink}>Home</Typography>
        </Link>
        <Link
          className={styles["scale-in-hor-left"]}
          style={style.link}
          href={{
            pathname: "/services/Sunday Service",
            query: { serviceName: "Sunday Service" },
          }}
        >
          <Typography sx={style.navLink}>Sermons</Typography>
        </Link>
        <Link
          className={styles["scale-in-hor-left"]}
          style={style.link}
          href={{
            pathname: "/services/Active Youth",
            query: { serviceName: "Active Youth" },
          }}
        >
          <Typography sx={style.navLink}>Active Youth</Typography>
        </Link>
        <Link
          className={styles["scale-in-hor-left"]}
          style={style.link}
          href={{
            pathname: "/services/childrens-church",
            query: { serviceName: "Children's Church" },
          }}
        >
          <Typography sx={style.navLink}>{"Children's Church"}</Typography>
        </Link>
      </Box>
    </Box>
  );
}

const style = {
  navLink: {
    fontSize: "24px",
    fontFamily: typeText,
    color: "#555",
    margin: "0px 40px",
    cursor: "pointer",
    textDecoration: "none",
  },
  link: {
    textDecoration: "none",
  },
};
export default ServicePageNavBar;
