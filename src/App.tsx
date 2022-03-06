import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { AiOutlineCloud } from "react-icons/ai";
import {
  AppShell,
  Burger,
  Col,
  Grid,
  Group,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from "@mantine/core";
function App() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
      navbarOffsetBreakpoint="sm"
      // fixed prop on AppShell will be automatically added to Header and Navbar
      fixed
      navbar={
        <Navbar
          padding="md"
          // Breakpoint at which navbar will be hidden if hidden prop is true
          hiddenBreakpoint="sm"
          // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
          hidden={!opened}
          // when viewport size is less than theme.breakpoints.sm navbar width is 100%
          // viewport size > theme.breakpoints.sm – width is 300px
          // viewport size > theme.breakpoints.lg – width is 400px
          width={{ sm: 100, lg: 100 }}
          sx={{ backgroundColor: "red" }}
        >
          {/* <Text>Application navbar</Text> */}
          {/* <Grid>
            <Col sx={{backgroundColor:'palegoldenrod'}} span={12}>
            </Col>
          </Grid> */}
          <Group direction="column" position="center">
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <AiOutlineCloud size="30" />
              <Text size='xs'>Now</Text>
            </div>
          </Group>
        </Navbar>
      }
      header={
        <Header height={70} padding="md">
          {/* Handle other responsive styles with MediaQuery component or createStyles function */}
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="xs" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }
    >
      <Text>Application content</Text>
    </AppShell>
  );
}

export default App;
