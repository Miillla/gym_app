import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EguipmetImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, equipment, target } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      title: "Body Part",
    },
    {
      icon: TargetImage,
      title: "Body Part",
    },
    {
      icon: EguipmetImage,
      title: "Body Part",
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography>{name}</Typography>
        <Typography>
          {" "}
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail.map((item, index) => (
          <Stack
            key={index}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%" }}
            gap="20px"
          >
            <Button
              sx={{
                backgroeund: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.title}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
