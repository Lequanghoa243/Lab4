import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router-dom";

import First from "./First";
import Second from "./Second";
import Third from "./Third";

export default function App({ links }) {
  const [open, setOpen] = useState(false);

  function toggleDrawer(event) {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  }

  return (
    <Router>
      <Button onClick={toggleDrawer}>Open Nav</Button>
      <section>
        <Switch>
          <Route path="/first" component={First} />
          <Route path="/second" component={Second} />
          <Route path="/third" component={Third} />
        </Switch>
      </section>
      <Drawer open={open} onClose={toggleDrawer}>
        <div style={{ width: 250 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <List>
            {links.map((link) => (
              <ListItem button key={link.url} component={Link} to={link.url}>
                <ListItemText
                  primary={link.name}
                  primaryTypographyProps={{ color: "primary" }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Router>
  );
}
