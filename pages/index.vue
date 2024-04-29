<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1
        class="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-10"
      >
        Discover AI Integration Solutions
      </h1>
      <p class="mt-4 max-w-xl mx-auto text-center text-xl text-gray-500">
        Explore how leading-edge AI solutions are transforming industries.
      </p>

      <div class="mt-10">
        <ul
          class="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
        >
          <li class="hover:scale-105 transition-transform duration-500">
            <NuxtLink
              to="/ck-davis-trends/leveraging-ai-for-project-success"
              class="space-y-4"
            >
              <!-- Replace with your actual image -->
              <img
                class="mx-auto h-20 lg:h-24"
                src="~/assets/ck-davis-logo.png"
                alt="CK Davis Trends"
              />
              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>CK Davis Trends</h3>
                  <p class="text-indigo-600">
                    Leveraging AI for Project Success
                  </p>
                </div>
              </div>
            </NuxtLink>
          </li>

          <li class="hover:scale-105 transition-transform duration-500">
            <NuxtLink
              to="/nexus-systems-group/transform-your-business-with-ai"
              class="space-y-4"
            >
              <!-- Replace with your actual image -->
              <img
                class="mx-auto h-20 lg:h-24"
                src="~/assets/nexus-logo.png"
                alt="Nexus Systems Group"
              />
              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>Nexus Systems Group</h3>
                  <p class="text-indigo-600">Transform Your Business with AI</p>
                </div>
              </div>
            </NuxtLink>
          </li>

          <li class="hover:scale-105 transition-transform duration-500">
            <NuxtLink
              to="/total-cover-it/elevate-your-cpa-firm-with-ai"
              class="space-y-4"
            >
              <!-- Replace with your actual image -->
              <img
                class="mx-auto h-20 lg:h-24"
                src="~/assets/total-cover-it-logo.png"
                alt="Total Cover It"
              />
              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>Total Cover It</h3>
                  <p class="text-indigo-600">Elevate Your CPA Firm with AI</p>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* You can add additional global styles in your tailwind.config.js or a global stylesheet */
</style>
