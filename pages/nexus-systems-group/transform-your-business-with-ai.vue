<template>
  <div
    class="container mx-auto p-10 flex flex-col items-center max-w-screen-xl"
  >
    <div class="text-center mb-10">
      <h1
        class="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-10"
      >
        Transform Your Business with AI
      </h1>
      <p class="mt-4 max-w-xl mx-auto text-center text-xl text-gray-500">
        May 2nd, 2024, Starting At 2:00 PM, Eastern
      </p>
      <div class="mt-4">
        <img
          src="~/assets/nexus-logo.png"
          alt="Nexus Educational Services Assoc. Logo"
          class="inline-block mx-auto pr-10"
        />
        <img
          src="~/assets/adsc-logo.png"
          alt="ADSC Logo"
          class="inline-block mx-auto"
        />
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">
          Unlock Potential with a Free AI Mini-Assessment
        </h2>
        <p>
          Dive into our AI solutions, rooted in the Capability Maturity Model
          Integration (CMMI) framework, designed to reveal new potential...
        </p>

        <h2 class="text-2xl font-bold">Strategic Empowerment</h2>
        <p>
          Our AI solutions offer critical insights to refine your business
          strategy and operational efficiency...
        </p>

        <h2 class="text-2xl font-bold">Why Engage with Our AI?</h2>
        <ul class="list-disc pl-5 space-y-2">
          <li>
            Expert Guidance: Our team of AI experts is here to facilitate your
            exploration...
          </li>
          <li>
            Future-Proof Your Strategy: Equip your business with the foresight
            to navigate future challenges...
          </li>
          <li>
            Zero Cost Exploration: Take advantage of our free mini-assessment to
            explore the transformative potential of AI...
          </li>
        </ul>

        <h2 class="text-2xl font-bold">Begin Your AI Journey</h2>
        <p>
          Join a select group of business and technical leaders who are
          leveraging our AI solutions to redefine success...
        </p>
        <button class="btn btn-primary mt-4">
          Start your free assessment today
        </button>
      </div>
      <RegistrationForm />
    </div>
  </div>
</template>

<style scoped>
/* Custom styles if needed */
</style>
<script setup></script>
