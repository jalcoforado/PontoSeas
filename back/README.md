# ASP NET CORE

This project was generated with [ASP NET CORE](https://github.com/aspnet/AspNetCore) version 2.2.105.

# Build

Run `dotnet build` to build the project. The build artifacts will be stored in the `bin/` directory. 

# Build Production
Run `dotnet publish` to build the project for a production build. 
The build artifacts will be stored in the `bin/debug/netcoreapp2.2/publish` directory. 

# OSX Terminal Kill process port 5000
sudo lsof -iTCP -sTCP:LISTEN -P | grep :5000
informe his password

kill -9 <numberProcess>

# Sample Kill process
dotnet    14127 cesarrabelonovo  195u  IPv4 0x59d7451ec4efe7f5      0t0  TCP localhost:5000 (LISTEN)
kill -9 14127

# ************************************ 
# Entity Framework 
# ***************************************

# Install version 2.1.0 EF
dotnet tool install --global dotnet-ef --version 2.1.0

# Add migration
dotnet ef migrations add <NameMigration>

# Execute migration
dotnet ef database update

# Remove a migration
dotnet ef migrations remove

# Details about dbcontext
dotnet ef dbcontext info

# ***************************************** 
# Docker commands 
# **************************************

# 1. list images docker
docker images

# 2. list services
docker ps

# 3. Stop container
docker stop <containerId>

# 4. Execute commands in container

docker exec <containerId> <commands>

# 5. Inspect container
docker inspect <containerId>

# 6. Verify docker performance
docker stats <containerId>

# 7. Remove container
docker rm -f <containerId>

# 8. Remove image
docker rmi -f <imageId>

# LAUNCH MULTIPLE ENVIROMENTS
dotnet run --launch-profile "Development"
dotnet run --launch-profile "Staging"
dotnet run --launch-profile "Production"
