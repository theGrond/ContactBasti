<template>
  <div class="ui column grid">
    <div class="column">
      <div class="ui raised segment">
        <div class="ui raised segment b-t-3">
          <a class="ui teal ribbon label custom-ribbon">Contacts</a>
          <div class="ui action input fluid m-l-5p">
            <input
              type="text"
              value=""
              v-model="search"
              placeholder="Search..."
            />
            <div @click="searcBtnClick" class="ui button">Search</div>
            <button @click="addContact" class="ui orange center icon button">
              <i
                class="plus icon m-r-10"
                style="margin-right: 10px !important"
              ></i>
              Add
            </button>
          </div>
        </div>

        <!--Main Contact -->

        <div class="ui raised segment">
          <div
            class="ui four column grid"
            v-for="(chunk, rowIndex) in searResultChecks"
            :key="`row-${rowIndex}`"
          >
            <div
              class="column"
              v-for="(res, colIndex) in chunk"
              :key="`row-${colIndex}-${rowIndex}`"
            >
              <div class="ui card w-100">
                <div class="image">
                  <img :src="res.imageUrl" />
                </div>
                <div class="content">
                  <a class="header">{{ res.firstName }} {{ res.lastName }}</a>
                  <div class="meta">
                    <span class="date">Mobile: {{ res.mobileNo }}</span>
                  </div>
                  <div class="meta">
                    <span class="date">Email: {{ res.email }}</span>
                  </div>
                  <div class="meta">
                    <span class="date">Facebook: {{ res.facebook }}</span>
                  </div>
                  <!-- <div class="description">
                    Kristy is an art director living in New York.
                  </div> -->
                </div>
                <div class="extra content">
                  <button
                    @click="editContact(res._id)"
                    class="ui blue icon button"
                  >
                    <i class="edit outline icon"></i>
                  </button>
                  <button
                    @click="deleteContact(res._id)"
                    class="ui red icon button"
                  >
                    <i class="eraser icon"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Main Contactc End -->

  <!-- <div class="hello">
    <button @click="addContact" class="ui secondary button">Add</button>
    <input v-model="search" />
    <div
      class="ui grid"
      v-for="(chunk, rowIndex) in searResultChecks"
      :key="`row-${rowIndex}`"
    >
      <div
        class="four wide column"
        v-for="(res, colIndex) in chunk"
        :key="`row-${colIndex}-${rowIndex}`"
      >
        <div class="ui card">
          <div class="image">
            <img
              src="https://semantic-ui.com/images/avatar2/large/kristy.png"
            />
          </div>
          <div class="content">
            <a class="header">{{ res.firstName }}</a>
            <div class="meta">
              <span class="date">Joined in 2013</span>
            </div>
            <div class="description">
              Kristy is an art director living in New York.
            </div>
          </div>
          <div class="extra content">
            <a>
              <i class="user icon"></i>
              22 Friends
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import axios from "axios";
import _ from "lodash";
export default {
  name: "Home",
  data: function () {
    return {
      search: "",
      searchResult: [],
    };
  },
  computed: {
    searResultChecks() {
      return _.chunk(Object.values(this.searchResult), 4);
    },
  },
  // watch: {
  //   search: async function (val) {
  //     try {
  //       let result = await axsio.get(
  //         "http://localhost:3000/contact/search/" + val
  //       );
  //       this.searchResult = result.data;
  //     } catch (ex) {
  //       this.searchResult = [];
  //     }
  //     console.log(val);
  //   },
  // },
  props: {
    msg: String,
  },
  methods: {
    async searcBtnClick() {
      try {
        let result = await axios.get(
          "http://localhost:3000/contact/search/" + this.search
        );
        this.searchResult = result.data;
      } catch (ex) {
        this.searchResult = [];
      }
    },
    addContact() {
      this.$router.push("/addcontact");
    },

    async deleteContact(id) {
      try {
        await axios.delete("http://localhost:3000/contact/" + id);
        if (this.search != "") {
          await this.searcBtnClick();
        } else {
          await this.getAll();
        }
      } catch (ex) {
        this.searchResult = [];
      }
    },
    editContact(id) {
      this.$router.push("/editcontact/" + id);
    },
    async getAll() {
      try {
        let res = await axios.get("http://localhost:3000/contact/getmany");
        this.searchResult = res.data;
      } catch (e) {
        console.error(e);
        alert("something went wrong");
      }
    },
  },
  async mounted() {
    await this.getAll();
  },
};
</script>
