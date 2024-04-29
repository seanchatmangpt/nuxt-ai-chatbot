#!/bin/bash

# Ensure the script is executed from the project root
PROJECT_ROOT=$(pwd)
echo "Setting up project structure in $PROJECT_ROOT"

# Create directories for Nuxt pages, components, and server middleware
mkdir -p $PROJECT_ROOT/pages $PROJECT_ROOT/components $PROJECT_ROOT/server/api $PROJECT_ROOT/utils $PROJECT_ROOT/prisma

# Create the registration and admin pages
touch $PROJECT_ROOT/pages/index.vue
touch $PROJECT_ROOT/pages/admin.vue

# Create a generic form component and other UI components
mkdir -p $PROJECT_ROOT/components/ui
touch $PROJECT_ROOT/components/ui/FormInput.vue
touch $PROJECT_ROOT/components/ui/Button.vue

# Create the Prisma schema file
touch $PROJECT_ROOT/prisma/schema.prisma

# Create server middleware for handling registration
touch $PROJECT_ROOT/server/api/register.ts

# Create a utility file for API calls and other utilities
touch $PROJECT_ROOT/utils/api.ts
touch $PROJECT_ROOT/utils/helpers.ts

# Optionally, create an environment file if it doesn't exist
if [ ! -f $PROJECT_ROOT/.env ]; then
    touch $PROJECT_ROOT/.env
    echo "Creating .env file for environment variables"
fi

# Create initial content for key files
# This step can be expanded with `echo` commands to populate files with initial boilerplate code

echo "Project structure setup complete."
