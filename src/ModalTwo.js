import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Recipes</h2>
      <p id="simple-modal-description">
        Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron
        and set aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan
        or a large, deep skillet over medium-high heat. Add chicken, shrimp and
        chorizo, and cook, stirring occasionally until lightly browned, 6 to 8
        minutes. Transfer shrimp to a large plate and set aside, leaving chicken
        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
        onion, salt and pepper, and cook, stirring often until thickened and
        fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups
        chicken broth; bring to a boil. Add rice and stir very gently to
        distribute. Top with artichokes and peppers, and cook without stirring,
        until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
        medium-low, add reserved shrimp and mussels, tucking them down into the
        rice, and cook again without stirring, until mussels have opened and
        rice is just tender, 5 to 7 minutes more. (Discard any mussels that
        don’t open.) Set aside off of the heat to let rest for 10 minutes, and
        then serve.
      </p>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Recipes
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
