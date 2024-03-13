import React from 'react'
import "./Platformadvantage.css"

function Platformadvantage() {
  return (
    <div>
      <div className="">
        <section class="platform-advantege-page">
          <div class="py-8 px-16 mx-auto max-w-screen-xl sm:py-16 lg:px-16 ">
            <div class="platform-advantage-heading max-w-screen-md mb-8 lg:mb-16">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                SmartEV IoT Platform Advantages
              </h2>
              <p class="platform-advantage-subheading text-gray-500 sm:text-xl dark:text-gray-400">
                A distinctive platform with comprehensive IoT packages that are
                essential to your digital transformation
              </p>
            </div>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0 justify-center">
              <div className="adv-card">
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <span class="material-symbols-outlined">dynamic_form</span>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Fast, Scalable & Elastic
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Fast, Scalable, elastic by design allowing you to onboard any
                  number of devices & manage billions of request wihtout any
                  error or downtime
                </p>
              </div>
              <div className="adv-card">
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <span class="material-symbols-outlined">manufacturing</span>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Agnostic and Independent
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Get the freedom to deplot your solution anywhere you prefer
                  either on premise or in public/private cloud infastructure
                </p>
              </div>
              <div className="adv-card">
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <span class="material-symbols-outlined">release_alert</span>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Fault Tolerance
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Fault management functionality, detects and diagnoses both
                  hardware and network connectivity-based failures automatically
                  without any downtime.
                </p>
              </div>
              <div className="adv-card">
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <span class="material-symbols-outlined">touch_app</span>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Usability
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Intuitive interface & dashboards for visualization of data and
                  KPIS, letting you interact with your IOT ecosystem with a
                  click of a button
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Platformadvantage
