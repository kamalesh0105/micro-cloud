# Use the official Ubuntu base image
FROM ubuntu:latest

# Install SSH server and set up a password for root
RUN apt-get update \
    && apt-get install -y openssh-server \
    && echo 'root:password' | chpasswd

# SSH configuration
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN mkdir /var/run/sshd

# Expose SSH port
EXPOSE 22

# Start SSH service
CMD ["/usr/sbin/sshd", "-D"]
