import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import styles from "./FAQs.module.css";

export default function MyCard({ data }) {
  const [expand, setExpand] = useState();

  return (
    <Box
      key={String(Math.random())}
      className={styles.card}
      sx={{
        height: "max-content",
        width: "100%",
        maxWidth: { xs: "500px", sm: "80%", md: "max( 40% , 475px)" },
        mx: { xs: "auto", md: 2 },
        display: "flex",
        flexDirection: "column",
        flexWrap: { xs: "wrap", sm: "nowrap" },
        justifyContent: "space-around",
        borderRadius: "3px",
        p: { xs: "auto", sm: 2.5 },
        py: { xs: 2 },
        my: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: { xs: 1, sm: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={() => setExpand(!expand)}
        >
          <Typography
            variant="h6"
            className={styles.primaryText}
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: { xs: "1.0rem", sm: "1.1rem" },
              whiteSpace: expand ? "normal" : "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {data.question}
          </Typography>
          <Box flexGrow={1} />
          <ArrowDropDownIcon
            sx={{
              color: "white",
            }}
          />
        </Box>
        <Collapse in={expand}>
          <Typography
            variant="h6"
            className={styles.secondaryText}
            sx={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: { xs: "0.8rem", sm: "0.95rem" },
              ml: "8px",
              mt: 1,
            }}
          >
            {data.answer}
          </Typography>
        </Collapse>
      </Box>
    </Box>
  );
}
