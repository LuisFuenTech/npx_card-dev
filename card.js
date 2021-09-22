#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require("fs");
// const request = require("request");
// const path = require("path");
// const ora = require("ora");
// const cliSpinners = require("cli-spinners");
clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:hi@luisfuentes.au@gmail.com");
          console.log("\nDone, see you soon at inbox.\n");
        }
      },
      /* {
                name: `Download my ${chalk.magentaBright.bold("Resume")}?`,
                value: () => {
                    // cliSpinners.dots;
                    const loader = ora({
                        text: ' Downloading Resume',
                        spinner: cliSpinners.material,
                    }).start();
                    let pipe = request('https://anmolsingh.me/api/resume').pipe(fs.createWriteStream('./anmol-resume.html'));
                    pipe.on("finish", function () {
                        let downloadPath = path.join(process.cwd(), 'anmol-resume.html')
                        console.log(`\nResume Downloaded at ${downloadPath} \n`);
                        open(downloadPath)
                        loader.stop();
                    });
                }
            }, */
      {
        name: "Just quit.",
        value: () => {
          console.log("Hasta la vista.\n");
        }
      }
    ]
  }
];

const data = {
  name: chalk.bold.green("                    Luis Fuentes"),
  handle: chalk.white("@luisfuentech"),
  work: `${chalk.white("Advanced Backend Dev at")} ${chalk
    .hex("#f2c624")
    .bold("Condor Labs")}`,
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("luisfuentech"),
  github: chalk.gray("https://github.com/") + chalk.green("luisfuentech"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") + chalk.blue("luis-fuentech"),
  web: chalk.cyan("https://luisfuentes.me"),
  npx: chalk.red("npx") + " " + chalk.white("luisfuentech"),

  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    // `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.bold("           * I love learning new things.")}`,
    `${chalk.bold("           * My mind is open the new ideas.")}`,
    `${chalk.bold("           * Every challenge is a gain.")}`
  ].join("\n"),
  {
    margin: 2,
    float: "center",
    padding: 1,
    borderStyle: "round",
    borderColor: "cyan"
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  ""
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
