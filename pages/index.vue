<template>
  <div sticky-container>
    <section v-sticky class="bg-white">
      <header
        class="container mx-auto p-4 flex flex-row justify-between items-center"
      >
        <div class="flex flex-row items-center">
          <img class="h-16 mr-4" src="../assets/logo-outline.svg" />

          <h2 class="font-normal">
            Nowendoc Run
          </h2>
        </div>

        <ul class="flex flex-row">
          <li class="mr-4">
            <a>About</a>
          </li>

          <li class="mr-4">
            <a>Our Cattle</a>

            <ul class="hidden">
              <li class="mr-4">
                <a>Health benefits</a>
              </li>

              <li class="mr-4">
                <a>Antibiotic and hormone free</a>
              </li>

              <li class="mr-4">
                <a>Humanely treated</a>
              </li>
            </ul>
          </li>

          <li class="mr-4">
            <a>The Land</a>
          </li>

          <li>
            <a>Contact</a>
          </li>
        </ul>
      </header>
    </section>

    <section id="about" class="container mx-auto p-4 mb-24">
      <div class="absolute -z-10 w-3/4 top -left-1/4">
        <img class="opacity-5 w-full" src="../assets/logo-outline.svg" />
      </div>

      <div class="w-full mb-24 flex flex-row justify-end">
        <img class="w-2/3" src="../assets/images/nowendoc-run-1.jpg" />
      </div>

      <div class="w-2/3">
        <p class="text-xl font-medium">
          Nowendoc Run is an accredited <a>LPA</a> and <a>MSA</a> cattle
          finishing property producing prime grass fed, antibiotic and hormone
          free beef, from our paddock to your plate.
        </p>

        <p>
          Located in one of the most sought after parts of the New England
          plateau with easy access to Sydney and Newcastle on the coast and
          Walcha, Tamworth and Armidale to the west.
        </p>

        <p>
          The district is renowned for its cattle, breeding and finishing
          capabilities due to its combination of its high altitude of 870 to
          1200m above sea level, 1,000mm (40 inch) rainfall, rich soils, and
          temperate climate.
        </p>

        <p>
          The original “Nowendoc Run” was just under 80,000 acres and
          encompassed the majority of the valley.
        </p>

        <p>
          This was later split in the early 1900’s into Riamukka, Nowendoc North
          and the area with the original homestead retained the Nowendoc Station
          name (these added up to about 40,000 acres) and then some other bits
          and pieces around the outskirts.
        </p>

        <p>
          The new “Nowendoc Run” has parts of Nowendoc North and Nowendoc
          Station.
        </p>

        <p>
          Originally six adjoining properties, namely The Two Mile, Littlemoor,
          Hope Hill, Garden Tops, Bru Max Hu and Hawksnest the property today
          comprises 2,155 hectares (5,325 acres) of some of the best livestock
          fattening country in Eastern Australia.
        </p>
      </div>
    </section>

    <section id="our-cattle" class="container mx-auto p-4 w-1/2 mb-24">
      <h1>
        Our prime cattle are antibiotic and hormone free, humanely treated and
        fed on the highest quality pastures with ample quality water.
      </h1>
    </section>

    <section id="health-benefits" class="container mx-auto p-4 mb-24">
      <div class="flex flex-row">
        <div class="w-2/5">
          <img src="../assets/images/nowendoc-run-2.jpg" />
        </div>

        <div class="w-3/5 ml-8">
          <div class="w-2/3 my-6">
            <h2>Health Benefits</h2>

            <p>
              Grass fed beef tastes better simply because of the variety of
              pastures the animals feed from, and along with the great taste
              grass fed beef is better for you because of its healthy fat
              content, antioxidants and fatty acids.
            </p>
          </div>

          <ul class="w-full flex flex-col">
            <li class="w-2/3 mb-4">
              <h3>
                Omega-3 (Good Fat)
              </h3>

              <p>
                Choosing grass fed beef over grain fed beef assures you a
                healthy balance of fats. Grass fed beef has an omega-6 to
                omega-3 ratio of around 1.5 : 1 compared with grain fed beef
                with a ratio of 7:1 or higher. Omega-3 is known to improve brain
                and eye health, reduce risk of certain cancers, heart disease,
                arthritis and more.
              </p>
            </li>

            <li class="w-2/3 mb-4">
              <h3>
                Antioxidants (Vitamins A, E, and B)
              </h3>

              <p>
                Grass fed beef has higher levels of the antioxidants vitamin A,
                vitamin E, zinc, iron and vitamin B12. These vitamins also help
                reduce the risk of cancer and boost your immune system.
              </p>
            </li>

            <li class="w-2/3">
              <h3>
                Conjugated Linoleic Acid (CLA)
              </h3>

              <p>
                Grass fed beef also contains CLA (Conjugated Linoleic Acid), a
                trans fatty acid that improves brain function, helps with weight
                loss and is widely believed to reduce cancer risk. While lower
                in overall saturated fat, grass fed beef is higher in CLA than
                grain fed beef.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section
      id="antibiotic-and-hormone-free"
      class="container mx-auto p-4 mb-24"
    >
      <div class="flex flex-row justify-end">
        <div class="w-2/3 mb-8">
          <h2>Antibiotic and hormone free</h2>

          <p>
            As our animals roam free with plenty of space and access to a
            diversity of plants means that the animals can maintain good health
            and the need for chemically treating sickness is lessened. To ensure
            our animals stay healthy they are given vaccinations to prevent
            disease, and treatments for parasites, as well as multivitamins, and
            supplements to help with their organ health.
          </p>

          <p>
            The problem with antibiotics and hormones is that they often remain
            in the end product and can have a negative effect when consumed by
            humans, including an increased risk of diabetes and certain types of
            cancer.
          </p>

          <p>
            If farm animals are being treated and fed antibiotics, it’s usually
            a sign that they are living in crowded facilities that are likely to
            make them sick or they are eating an unnatural diet and hormones to
            fatten them quickly.
          </p>

          <p>
            Through data entry into Stockbook we can guarantee lifetime
            traceability of all veterinary treatments we give our cattle and the
            pastures they graze. We can show what we treated the cattle with,
            what the batch number was, what the expiry date of the treatment and
            the withholding period of the treatment. This is very important as
            we can comply with any audit for human consumption protocols.
          </p>
        </div>
      </div>

      <div class="w-2/3">
        <img src="../assets/images/nowendoc-run-3.jpg" />
      </div>
    </section>

    <section id="humanely-treated" class="container mx-auto p-4 mb-24">
      <div class="w-2/3 mb-8">
        <h2>Humanely Treated</h2>

        <p>
          We have a commitment to quality and responsibility to ensure the
          highest possible animal welfare standards. Our animals are pasture
          raised with access to fresh water sourced from trout streams, living
          outdoors for all of their lives where they get fresh air, a variety of
          land with shelter and sunshine.
        </p>

        <p>
          Our animals are also divided into social groups based around weight
          and temperament which means that bullying and other advese social
          behaviour are greatly reduced and the overall stress of the different
          groups are reduced.
        </p>

        <p>
          When handling our animals we follow Low Stress Stock Handling
          techniques, most of our handling uses body language. No whips, no
          electric jiggers or other equipment that causes pain or stress to the
          animals is used. These techniques mean we can maintain a close
          relationship with the animals are comfortable when being handled and
          they have a very calm temperament.
        </p>

        <p>
          Our paddocks, laneway system and yards are all designed around stress
          free movement of stock, the property is essentially a funnel from the
          back fence to the crush in the yards where the animals are weighed and
          treated individually.
        </p>
      </div>

      <div>
        <img src="../assets/images/nowendoc-run-4.jpg" />
      </div>
    </section>

    <section id="the-land" class="container mx-auto p-4 mb-24">
      <div class="flex flex-row w-full justify-end mb-8">
        <div class="w-2/3 mr-8">
          <h2>High quality food and water = high quality beef.</h2>

          <p>
            The management of the land is just as important as the animals. We
            use environmentally sustainable processes to ensure the best quality
            pastures and water is available for our animals. We are essentially
            grass farmers, if we look after the land the cattle will thrive.
          </p>

          <p>
            Nowendoc is renowned for its productive black and red basalt and
            loam soils, with alluvial river flats. Nowendoc Run has extensive
            areas of high performance pastures all undersown for winter
            fattening, including a mix of sub/red/white clovers, phalaris,
            cocksfoot, fescue, rye, chicory, plantain, and oats.
          </p>

          <p>
            The pasture management programme at the Nowendoc Run contributes to
            the sustainability of the land.
          </p>

          <ul class="ml-6">
            <li class="list-disc mb-2">
              No till processes are used to make sure there is little
              disturbance to the soil.
            </li>

            <li class="list-disc mb-2">
              Cattle are rotated through different pastures which breaks the
              life-cycle of parasites and lowers the need for animal health
              treatments.
            </li>

            <li class="list-disc mb-2">
              Canopy cover is encouraged to reduce noxious weeds.
            </li>

            <li class="list-disc mb-2">
              The treatments used for internal parasites in the animals are
              friendly to the dung beetle whose job is to speed up the removal
              of dung and aerate the soil.
            </li>
          </ul>

          <p>
            With 18km of double water frontage to the Nowendoc River, Coutawong
            Creek, Lewis Creek, Cox’s Swamp and Creek and a multitude of
            permanent spring fed surface dams and soaks there is no problem with
            access to high quality clean running water. This ensures the
            pastures are growing but also provides the animals with access to
            clean, fresh water whenever they need.
          </p>

          <p>
            An extensive reticulated water trough system is in place to ensure
            cattle have access to clean fresh water without having to travel
            more than 200 meters to drink.
          </p>
        </div>
      </div>

      <div>
        <img class="w-2/3" src="../assets/images/nowendoc-run-5.jpg" />
      </div>
    </section>

    <section id="contact" class="container mx-auto p-4">
      <div class="absolute -z-10 w-3/4 top -left-1/4">
        <img class="opacity-5 w-full" src="../assets/logo-outline.svg" />
      </div>
      <div class="w-full flex flex-row">
        <div class="w-2/3">
          <h2>Contact us</h2>

          <p>
            If you wish to contact the Nowendoc Run please use the enquiry form
            below or contact via the email and phone details below.
          </p>

          <form name="contact" netlify class="w-full flex flex-col">
            <div class="flex flex-row -mx-2 mb-4">
              <div class="w-1/2 mx-2">
                <label>First name</label>
                <input class="w-full" type="text" name="first-name" />
              </div>
              <div class="w-1/2 mx-2">
                <label>Last name</label>
                <input class="w-full" type="text" name="last-name" />
              </div>
            </div>

            <div class="flex flex-col mb-4">
              <label>Email</label>
              <input class="w-full" type="email" name="email" />
            </div>

            <div class="flex flex-col mb-4">
              <label>Contact type</label>
              <select class="w-full" name="type">
                <option>General enquiries</option>
                <option>Cattle sales</option>
                <option>Cattle purchases</option>
                <option>Employment</option>
                <option>Suppliers</option>
              </select>
            </div>

            <div class="flex flex-col mb-4">
              <label>Message</label>
              <textarea class="w-full h-48" type="email" name="email" />
            </div>

            <div class="flex flex-col mb-4">
              <button type="submit" class="self-end">Send</button>
            </div>
          </form>
        </div>

        <div class="w-1/3 ml-8">
          <div class="flex flex-col mb-4">
            <h2>Our Address</h2>

            <a
              href="https://www.google.com/maps/place/6138+Brackendale+Rd,+Nowendoc+NSW+2354/@-31.4841013,151.677614,13.6z/data=!4m5!3m4!1s0x6b756a651cdac741:0x34a4e244f9a4de93!8m2!3d-31.4827523!4d151.7160276"
              target="_blank"
              >6138 Brackendale Road<br />
              Nowendoc, NSW ‎2354<br />
              Australia
            </a>
          </div>

          <gmap-map
            :center="maps.center"
            :map-type-id="maps.mapTypeId"
            :zoom="maps.zoom"
            :options="maps.options"
            class="h-128 w-full"
          >
            <gmap-marker
              v-for="(item, index) in maps.markers"
              :key="index"
              :position="item.position"
              @click="center = item.position"
            />
          </gmap-map>
        </div>
      </div>

      <div class="w-full flex flex-row justify-between mb-8">
        <div>
          <div class="flex flex-col mb-2">
            <p>General Contact</p>

            <a href="mailto:contact@nowendoc.run?subject=Website Enquiry"
              >contact@nowendoc.run</a
            >
          </div>

          <div class="flex flex-col mb-2">
            <p>Ross Henderson, Farm Manager</p>

            <a href="mailto:ross@nowendoc.run">ross@nowendoc.run</a>

            <a href="tel:‭0447 335 364‬">0447 335 364‬</a>
          </div>

          <div class="flex flex-col">
            <p>Linda Wild, Farm Administrator</p>

            <a href="mailto:linda@nowendoc.run">linda@nowendoc.run</a>

            <a href="tel:‭0400 815 800‬‬">0400 815 800‬</a>
          </div>
        </div>

        <div class="self-end">
          <img class="w-48" src="../assets/logo-outline.svg" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowTop: 0,
      maps: {
        center: { lat: -31.493745, lng: 151.702652 },
        mapTypeId: 'hybrid',
        markers: [{ position: { lat: -31.488286, lng: 151.712176 } }],
        zoom: 13,
        options: {
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false
        }
      }
    }
  },
  computed: {
    scrolled() {
      if (this.windowTop > 0) {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    logStick() {
      console.log('sticky')
    },
    onScroll(e) {
      this.windowTop =
        window.top.scrollY /* or: e.target.documentElement.scrollTop */
    }
  }
}
</script>
