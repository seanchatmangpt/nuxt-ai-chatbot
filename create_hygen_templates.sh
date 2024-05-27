#!/bin/bash

# Create Hygen template directories
mkdir -p _templates/atom/new
mkdir -p _templates/molecule/new
mkdir -p _templates/organism/new
mkdir -p _templates/template/new

# Create prompt.js for atom templates
cat << 'EOF' > _templates/atom/new/prompt.js
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the atom component?'
      }
    ]
    return inquirer.prompt(questions)
  }
}
EOF

# Create index.ejs.t for atom templates
cat << 'EOF' > _templates/atom/new/index.ejs.t
---
to: <%= h.src('components/atoms', `${name}.vue`) %>
---

<template>
  <div class="<%= name.toLowerCase() %>">
    <!-- Atom content -->
  </div>
</template>

<script>
export default {
  name: '<%= name %>'
}
</script>

<style scoped>
.<%= name.toLowerCase() %> {
  /* Atom styles */
}
</style>
EOF

# Create prompt.js for molecule templates
cat << 'EOF' > _templates/molecule/new/prompt.js
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the molecule component?'
      }
    ]
    return inquirer.prompt(questions)
  }
}
EOF

# Create index.ejs.t for molecule templates
cat << 'EOF' > _templates/molecule/new/index.ejs.t
---
to: <%= h.src('components/molecules', `${name}.vue`) %>
---

<template>
  <div class="<%= name.toLowerCase() %>">
    <!-- Molecule content -->
  </div>
</template>

<script>
export default {
  name: '<%= name %>'
}
</script>

<style scoped>
.<%= name.toLowerCase() %> {
  /* Molecule styles */
}
</style>
EOF

# Create prompt.js for organism templates
cat << 'EOF' > _templates/organism/new/prompt.js
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the organism component?'
      }
    ]
    return inquirer.prompt(questions)
  }
}
EOF

# Create index.ejs.t for organism templates
cat << 'EOF' > _templates/organism/new/index.ejs.t
---
to: <%= h.src('components/organisms', `${name}.vue`) %>
---

<template>
  <div class="<%= name.toLowerCase() %>">
    <!-- Organism content -->
  </div>
</template>

<script>
export default {
  name: '<%= name %>'
}
</script>

<style scoped>
.<%= name.toLowerCase() %> {
  /* Organism styles */
}
</style>
EOF

# Create prompt.js for template templates
cat << 'EOF' > _templates/template/new/prompt.js
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the page template?'
      }
    ]
    return inquirer.prompt(questions)
  }
}
EOF

# Create index.ejs.t for template templates
cat << 'EOF' > _templates/template/new/index.ejs.t
---
to: <%= h.src('components/templates', `${name}.vue`) %>
---

<template>
  <div class="<%= name.toLowerCase() %>">
    <!-- Template content -->
  </div>
</template>

<script>
export default {
  name: '<%= name %>'
}
</script>

<style scoped>
.<%= name.toLowerCase() %> {
  /* Template styles */
}
</style>
EOF

echo "Hygen templates created successfully."
