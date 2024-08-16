<template>
    <BaseLayout>
        <div>
            <div class="px-4 py-16 mx-auto mt-9 sm:max-w-xl md:max-w-full md:px-24 lg:px-28 lg:py-20">
              <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                  <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full text-primary bg-teal-accent-400">
                    Core Team
                  </p>
                </div>
                <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-500 sm:text-4xl md:mx-auto">
                  <span class="relative inline-block">
                    <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                      <defs>
                        <pattern id="1d4040f3-9f3e-4ac7-b117-7d4009658ced" x="0" y="0" width=".135" height=".30">
                          <circle cx="1" cy="1" r=".7"></circle>
                        </pattern>
                      </defs>
                      <rect fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)" width="52" height="24"></rect>
                    </svg>
                    <span class="relative">Welcome</span>
                  </span>
                  our talented team of professionals
                </h2>
                <p class="text-base text-gray-500 md:text-lg">
                    Wisdom Cooperation was founded with a clear mission: to empower students like you to achieve academic excellence and unlock your full potential. We believe that every student deserves access to high-quality educational support and personalized guidance. 
                </p>
              </div>
              <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div>
                        <TeamMember
                        name="Dr. Samba"
                        role="CEO, Lorem Inc."
                        about="Apple pie macaroon toffee jujubes pie tart cookie caramels."
                        :image="Samba"
                        :socialHandles="{
                          twitter: '',
                          facebook: ''
                        }"
                      />
                    </div>
                </div>
                <div>
                    <div>
                        <TeamMember
                        name="Foryoung Junior Nug"
                        role="C.T.O, Lorem Inc.Traitz Tech"
                        about="Computer Engineer | Entrepreneur"
                        :image="Junior"
                        :socialHandles="{
                          twitter: '',
                          facebook: ''
                        }"
                      />
                    </div>
                </div>
                <div>
                    <TeamMember
                    name="Dr. Ayuvae Eyota"
                    role="CTO, Lorem Inc."
                    about="Apple pie macaroon toffee jujubes pie tart cookie caramels."
                    :image="Ayuvae"
                    :socialHandles="{
                      twitter: '',
                      facebook: ''
                    }"
                  />
                </div>
                <div>
                    <div>
                        <TeamMember
                        name="Dr. Samba"
                        role="CEO, Lorem Inc."
                        about="Apple pie macaroon toffee jujubes pie tart cookie caramels."
                        :image="Samba"
                        :socialHandles="{
                          twitter: '',
                          facebook: ''
                        }"
                      />
                    </div>
                </div>
                <div>
                    <TeamMember
                    name="Dr. Ayuvae Eyota"
                    role="CTO, Lorem Inc."
                    about="Apple pie macaroon toffee jujubes pie tart cookie caramels."
                    :image="Ayuvae"
                    :socialHandles="{
                      twitter: '',
                      facebook: ''
                    }"
                  />
                </div>
                <div>
                    <div>
                        <TeamMember
                        name="Dr. Samba"
                        role="CEO, Lorem Inc."
                        about="Apple pie macaroon toffee jujubes pie tart cookie caramels."
                        :image="Samba"
                        :socialHandles="{
                          twitter: '',
                          facebook: ''
                        }"
                      />
                    </div>
                </div>
                <div>
                    <div>
                        <TeamMember
                        name="Foryoung Junior Nug"
                        role="C.T.O, Lorem Inc.Traitz Tech"
                        about="Computer Engineer | Entrepreneur"
                        :image="Junior"
                        :socialHandles="{
                          twitter: '',
                          facebook: ''
                        }"
                      />
                    </div>
                </div>
                <div>
                    <div>
                        <TeamMember
                        name="Dr. Samba"
                        role="CEO, Lorem Inc."
                        about="Apple pie macaroon toffee jujubes pie tart cookie caramels."
                        :image="Samba"
                        :socialHandles="{
                          twitter: '',
                          facebook: ''
                        }"
                      />
                    </div>
                </div>
              </div>
            </div>
          </div>
    </BaseLayout>
  </template>
  
  <script setup>
  import BaseLayout from '../layout/BaseLayout.vue';
  import TeamMember from '../components/TeamMember.vue';
  import Ayuvae from '../assets/img/team/ayuvae.jpeg';
  import Samba from '../assets/img/team/samba.jpeg';
  import Junior from '../assets/img/team/junior.jpeg';
  </script>
  