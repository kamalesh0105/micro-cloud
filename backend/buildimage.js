//buildimage.js
const Docker = require("dockerode");
const fs = require("fs");

const docker = new Docker();

const contextPath = "/root/dev/";

docker.buildImage(
    {
        context: contextPath,
        src: ["Dockerfile"],
        t: "ssh-server:latest", // Tag for the image
    },
    (err, stream) => {
        if (err) {
            console.error("Error building Docker image:", err);
            return;
        }

        // Handle build output
        docker.modem.followProgress(stream, onFinished, onProgress);
    }
);

function onFinished(err, output) {
    if (err) {
        console.error("Error building Docker image:", err);
        return;
    }
    console.log("Docker image built successfully:", output);
}

function onProgress(event) {
    console.log("Building Docker image:", event);
}
