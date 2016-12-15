// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#2D2D2D",
  bright: "#F6A623"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="#F6A623">
              Deep dive
            </Heading>
            <Heading size={2} fit caps lineHeight={1} textColor="#F6A623">
              into Zone.js
            </Heading>
            <Heading caps lineHeight={1}>
              Jakub Malinowski
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="#F6A623">
              IG + J-labs
            </Heading>
            <Heading size={2} fit caps lineHeight={1} textColor="#fff">
              Meet.js Kraków
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="#F6A623">
              Survey
            </Heading>
          </Slide>

          <Slide transition={["fade"]} textColor="#F6A623">
            <Heading size={1} caps lineHeight={1} textColor="#F6A623">
              Problem
            </Heading>
            <Heading size={1} caps lineHeight={1} textColor="#F6A623">
              Idea
            </Heading>
            <Heading size={1} caps lineHeight={1} textColor="#F6A623">
              Implementation
            </Heading>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/sources/angular-demo.html")}
            textSize="15px"
            ranges={[
              { loc: [0, 17], title: "Angular.js", note: "Angular.js creators always had interesting ideas" },
              { loc: [3, 5] },
              { loc: [15, 16], note: "doSth($event) ???" },
              { loc: [7, 11], note: "How do I know $scope changed and refresh needed?" },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/sources/angular-demo-setter.html")}
            textSize="15px"
            ranges={[
              { loc: [7, 10] },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/sources/angular-demo-manual.html")}
            textSize="15px"
            ranges={[
              { loc: [9, 11] },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/sources/angular-demo-monkey.html")}
            textSize="15px"
            ranges={[
              { loc: [12, 17] },
            ]}/>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="#F6A623">
              Aspect oriented
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="#F6A623">
              programming
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="#F6A623">
              One step further
            </Heading>
            <Heading size={1} caps lineHeight={1} textColor="#F6A623">
              asynchronous
            </Heading>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/sources/angular-digest-01.html")}
            textSize="15px"
            ranges={[
              { loc: [0, 19] },
              { loc: [8, 13], note: 'Asynchronous, so a little more difficult' },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/sources/angular-digest-02.html")}
            textSize="15px"
            ranges={[
              { loc: [8, 14], note: 'Manually mark changes' },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/sources/angular-digest-03.html")}
            textSize="15px"
            ranges={[
              { loc: [8, 17], note: 'Monkey patch then, refresh the view when handler done.' },
              { loc: [18, 20], note: "Implement all Promise's methods." },
              { loc: [27, 30], note: "Clean up." },
              { loc: [21, 26], note: "Implement for every async method." },
              { loc: [22, 25], note: "Patch again before handler runs, unpatch after it finishes." },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/sources/angular-digest-04.html")}
            textSize="15px"
            ranges={[
              { loc: [32, 39], note: 'Final form.' },
              { loc: [26, 31], note: 'Unpatch is obvious.' },
              { loc: [8, 13], note: 'Why patch again?' },
              { loc: [12, 19], note: 'Wrap the code in patched Promise.' },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/sources/angular-digest-05.html")}
            textSize="15px"
            ranges={[
              { loc: [9, 27], note: 'Same, but better' },
              { loc: [18, 27], note: 'run wraps the code with patched async functions' },
              { loc: [10, 18], note: 'many different hooks are available' },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/sources/angular-digest-06.html")}
            textSize="15px"
            ranges={[
              { loc: [26, 29], note: 'This is the part framework should do.' },
              { loc: [6, 15], note: 'Building myZone' },
              { loc: [16, 25], note: 'Controller is the same as before' },
            ]}/>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="bright">
              Congratulations for
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="bright">
              getting this far
            </Heading>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="javascript"
            code={require("raw!../assets/sources/express-error-01.es")}
            textSize="15px"
            ranges={[
              { loc: [0, 22] },
              { loc: [3, 14], note: 'Get something from the database' },
              { loc: [15, 20], note: 'Display, easy' },
              { loc: [16, 19], note: 'Forgot to handle failed promise' },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="javascript"
            code={require("raw!../assets/sources/express-error-02.es")}
            textSize="15px"
            ranges={[
              { loc: [56, 61], note: 'Protect from unhandled errors and rejected promises' },
              { loc: [12, 15], note: 'Take a function' },
              { loc: [45, 55], note: 'Return a function' },
              { loc: [46, 53], note: 'Mount, unmount, handle problems, return results' },
              { loc: [16, 39], note: 'Again, poor promise implementation' },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="javascript"
            code={require("raw!../assets/sources/express-error-03.es")}
            textSize="15px"
            ranges={[
              { loc: [29, 34], note: 'zoneWrapper instead of safe500' },
              { loc: [14, 16], note: 'Take a function and return a function' },
              { loc: [14, 28], note: 'So simple this time' },
              { loc: [19, 23], note: 'Another convenient hook' },
            ]}/>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="bright">
              Usage examples
            </Heading>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="javascript"
            code={require("raw!../assets/sources/usage-00.es")}
            textSize="15px"
            ranges={[
              { loc: [0, 82], note: 'All hooks are here' },
              { loc: [61, 63], note: 'Plan and execute' },
              { loc: [52, 53], note: 'Handle errors' },
            ]}/>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="bright">
              Smart stacktraces
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="bright">
              Feature demo
            </Heading>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/sources/usage-01a.html")}
            textSize="15px"
            ranges={[
              { loc: [0, 28] },
              { loc: [6, 10], note: 'Register handler' },
              { loc: [11, 16], note: 'On click open popup' },
              { loc: [17, 20], note: 'When button clicked, save the data, we might fail' },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/sources/usage-01b.html")}
            textSize="15px"
            ranges={[
              { loc: [15, 19], note: 'Only entry point needs to be wrapped' },
              { loc: [13, 14], note: 'Helper from Zone.js creators, not built-in by default' },
              { loc: [6, 12], note: 'Full stacktrace available' },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="javascript"
            code={require("raw!../assets/sources/usage-01c.es")}
            textSize="15px"
            ranges={[
              { loc: [60, 72], note: 'Every time a new task is planned, create a stack trace' },
              { loc: [72, 75], note: 'Watch for errors' },
              { loc: [105, 106], note: 'Pass the stack trace to our client' },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/sources/usage-02a.html")}
            textSize="15px"
            ranges={[
              { loc: [0, 16] },
              { loc: [6, 11], note: 'Imagine these are pending promises' },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/sources/usage-02b.html")}
            textSize="15px"
            ranges={[
              { loc: [6, 18], note: 'Patch setTimeout, and track pending timeouts (promises)' },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/sources/usage-02c.html")}
            textSize="15px"
            ranges={[
              { loc: [6, 12], note: 'Again, with Zone.js, much simpler' },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="javascript"
            code={require("raw!../assets/sources/usage-02d.es")}
            textSize="15px"
            ranges={[
              { loc: [14, 19], note: 'Zone.js does it in the same way, but it keeps arrays' },
              { loc: [37, 44], note: 'When task is planned, add to the list' },
              { loc: [57, 66], note: 'When task is finished, remove from the list' },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="javascript"
            code={require("raw!../assets/sources/usage-03a.html")}
            textSize="15px"
            ranges={[
              { loc: [5, 10], note: 'Zone.js must be the master of promises' },
              { loc: [3, 4], note: 'But bing maps also think they are master of promises' },
            ]}/>

          <CodeSlide
            transition={["slide"]}
            lang="javascript"
            code={require("raw!../assets/sources/usage-03b.html")}
            textSize="15px"
            ranges={[
              { loc: [35, 36], note: 'Zone.js must be the last to overwrite Promise' },
              { loc: [7, 11], note: 'Track when elements are added to the page' },
              { loc: [12, 18], note: "If it's a script, attach to onload, but respect original callback" },
              { loc: [19, 22], note: 'Promise is overwritten so Bing maps are loaded' },
              { loc: [23, 27], note: 'Safe to load Zone.js now' },
            ]}/>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="bright">
              Not invented here
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="bright">
              Understand others' decisions
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="bright">
              Don't overwrite global objects ;)
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="bright">
              Thank you!
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="bright">
              We did it!
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="bright">
              Any questions?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
