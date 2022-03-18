<template>
  <div class="ui raised very text container segment">
    <h3 class="ui header left aligned">
      Contacts <button class="mini ui teal button">Add</button>
    </h3>
    <div class="ui inverted divider"></div>
    <div class="ui form">
      <div class="required field">
        <label class="text-l">Contact ID</label>
        <input v-model="contactId" type="text" placeholder="Contact ID" />
      </div>
      <div class="required field">
        <label class="text-l">First name</label>
        <input v-model="firstName" type="text" placeholder="First Name" />
      </div>
      <div class="required field">
        <label class="text-l">Last name</label>
        <input v-model="lastName" type="text" placeholder="Full Name" />
      </div>
      <div class="required field">
        <label class="text-l">Mobile No</label>
        <input type="text" v-model="mobileNo" placeholder="Mobile No" />
      </div>
      <div class="field">
        <label class="text-l">Email</label>
        <input type="text" v-model="email" placeholder="Email" />
      </div>
      <div class="field">
        <label class="text-l">Facebook</label>
        <input type="text" v-model="facebook" placeholder="Facebook" />
      </div>
      <div class="field">
        <label class="text-l">Image Url</label>
        <input type="text" v-model="imageUrl" placeholder="Image Url" />
      </div>
      <div class="ui buttons">
        <button @click="save" class="ui blue basic button">
          <i class="icon save outline"></i>Save
        </button>
        <button @click="close" class="ui blue basic button">
          <i class="icon red times"></i>Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditContact",
  data: function () {
    return {
      contactId: "",
      firstName: "",
      lastName: "",
      mobileNo: "",
      email: "",
      facebook: "",
      imageUrl: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    async save() {
      if (
        this.contactId == "" ||
        this.firstName == "" ||
        this.lastName == "" ||
        this.mobileNo == "" ||
        this.email == "" ||
        this.facebook == "" ||
        this.imageUrl == ""
      ) {
        alert("All field required");
      } else {
        try {
          await axios.put(
            "http://localhost:3000/contact/" + this.$route.params.id,
            {
              contactId: this.contactId,
              firstName: this.firstName,
              lastName: this.lastName,
              mobileNo: this.mobileNo,
              email: this.email,
              facebook: this.facebook,
              imageUrl: this.imageUrl,
            }
          );

          this.$router.go(-1);
        } catch (e) {
          console.error(e);
          alert("something went wrong");
        }
      }
    },
    close() {
      this.$router.go(-1);
    },
  },
  async mounted() {
    console.log(this.$route.params);
    try {
      let res = await axios.get(
        "http://localhost:3000/contact/" + this.$route.params.id
      );
      this.contactId = res.data.contactId;
      this.firstName = res.data.firstName;
      this.lastName = res.data.lastName;
      this.mobileNo = res.data.mobileNo;
      this.email = res.data.mobileNo;
      this.facebook = res.data.facebook;
      this.imageUrl = res.data.imageUrl;
    } catch (e) {
      console.error(e);
      alert("something went wrong");
    }
  },
};
</script>
