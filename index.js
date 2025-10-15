import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
    {
        massage: "write your url",
        name: "URL",
    },
])
    .then((answers) => {
        const url = answers.URL;

        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qrimg.png'));

        fs.writeFile("text.txt", url, (err) => {
            if (err) throw err;
            console.log("saved");
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
