const fs = require("fs");

fs.mkdir("Challenge", (err) => {
    if (!err) console.log("New Folder Created");
});


fs.writeFile("Challenge/Bio.txt", "This is a new File inside the Challenge Folder.", (err) => {
    if (!err) console.log("New File Created");
});


fs.appendFile("Challenge/Bio.txt", " New Data Appended ", () => {
    setTimeout(() => {
        console.log("New Data Appended");
    }, 2500)
})


fs.readFile("Challenge/Bio.txt", "utf-8", (err, data) => {
    if (!err) {
        console.log("File is being read");
        console.log(data);
    }
}
)

fs.rename("Challenge/Bio.txt", "Challenge/myBio.txt", (err) => {
    if (!err) console.log("Renaming the File");
})

fs.unlink("Challenge/myBio.txt", () => {
    setTimeout(() => {
        console.log("File Deleted ")
    }, 3000)
}) 