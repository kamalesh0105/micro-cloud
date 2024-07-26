//runContainer.js
const Docker = require("dockerode");
// Create a Dockerode instance
const docker = new Docker();
async function runContainer() {
    try {
        // Define container options
        const containerOptions = {
            Image: "7f26a5b09fd7", // Image name or ID
            name: "my-ssh-continer-2", // Container name
            AttachStdout: true,
            AttachStderr: true,
            Tty: true,
            NetworkingConfig: {
                EndpointsConfig: {
                    ssh_network: {} // Replace with your network name
                }
            }
        };

        // Create the container
        const container = await docker.createContainer(containerOptions);

        // Start the container
        await container.start();

        // Inspect the container to get updated information
        const containerInfo = await container.inspect();
        // Access container information
        console.log(
            "Container running as:",
            containerInfo.Id,
            containerInfo.Name,
            containerInfo.Config.Image
        );
    } catch (err) {
        console.error("Error starting container:", err);
    }
}

// Run the async function to start the container
runContainer();
