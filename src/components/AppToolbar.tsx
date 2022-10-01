import {
  Typography,
  Toolbar,
  AppBar,
  AppBarProps,
  IconButton,
  useTheme,
} from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useToggleTheme } from "../theme";

type AppToolbarProps = Omit<AppBarProps, "children">;

export function AppToolbar(props: AppToolbarProps): JSX.Element {
  const toggleTheme = useToggleTheme();
  const theme = useTheme();

  return (
    <AppBar {...props}>
      <Toolbar>
        <Typography sx={{ fontSize: "1.5rem", flexGrow: 1 }} variant="h3">
          Material-UI react-beautiful-dnd
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          {theme.palette.mode === "light" ? <DarkMode /> : <LightMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export { Toolbar };
