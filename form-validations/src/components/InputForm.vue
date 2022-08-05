<template>
  <div class="container">
    <form class="form" @submit.prevent="onSubmit">
      <h3>Validation</h3>
      <div class="form-container">
        <div class="form-group">
          <label class="form-group-label">
            Name <span class="text">*</span></label
          >
          <input
            type="text"
            v-model.trim="$v.name.$model"
            :class="{ 'is-invalid': validationStatus($v.name) }"
            class="form-group-input"
          />
          <div v-if="$v.name.$error" class="invalid-feedback">
            The name field is required.
          </div>
          <div v-if="!$v.name.alpha" class="invalid-feedback">
            Please enter the letter
          </div>
        </div>
        <div class="form-group">
          <label class="form-group-label"
            >Surname <span class="text">*</span></label
          >
          <input
            type="text"
            v-model.trim="$v.surname.$model"
            :class="{ 'is-invalid': validationStatus($v.surname) }"
            class="form-group-input"
          />
          <div v-if="$v.surname.$error" class="invalid-feedback">
            The lastname field is required.
          </div>
          <div v-if="!$v.surname.alpha" class="invalid-feedback">
            Please enter the letter
          </div>
        </div>
        <div class="form-group">
          <label class="form-group-label"
            >Age <span class="text">*</span></label
          >
          <input
            type="text"
            v-model.trim="$v.age.$model"
            :class="{ 'is-invalid': validationStatus($v.age) }"
            class="form-group-input"
          />
          <div v-if="$v.age.$error" class="invalid-feedback">
            The age field is required.
          </div>
          <div v-if="!$v.age.numeric" class="invalid-feedback">
            Please enter only number.
          </div>
        </div>
        <div class="form-group">
          <label class="form-group-label"
            >Phone <span class="text">*</span></label
          >

          <input
            type="text"
            v-model.trim="$v.phone.$model"
            :class="{ 'is-invalid': validationStatus($v.phone) }"
            class="form-group-input"
          />
          <div v-if="$v.phone.$error" class="invalid-feedback">
            The phone field is required.
          </div>
          <div class="invalid-feedback">
            {{ phoneError }}
          </div>
        </div>
        <div class="form-group">
          <label class="form-group-label"
            >Email <span class="text">*</span></label
          >
          <input
            type="email"
            v-model.trim="$v.email.$model"
            :class="{ 'is-invalid': validationStatus($v.email) }"
            class="form-group-input"
          />
          <div v-if="$v.email.$error" class="invalid-feedback">
            The email field is required.
          </div>
          <div v-if="!$v.email.email" class="invalid-feedback">
            The email is not valid.
          </div>
        </div>
        <div class="form-group">
          <label class="form-group-label"
            >Country <span class="text">*</span></label
          >
          <select
            v-model.trim="$v.country.$model"
            :class="{ 'is-invalid': validationStatus($v.country) }"
            class="form-group-input"
          >
            <option :value="c.id" :key="c.id" v-for="c in countryList">
              {{ c.Name }}
            </option>
          </select>
          <div v-if="$v.country.$error" class="invalid-feedback">
            The country field is required.
          </div>
        </div>
        <div class="form-group">
          <label class="form-group-label">
            Address <span class="text">*</span></label
          >
          <textarea
            type="text"
            v-model.trim="$v.address.$model"
            :class="{ 'is-invalid': validationStatus($v.address) }"
            class="form-group-input"
          />
          <div v-if="$v.address.$error" class="invalid-feedback">
            The name field is required.
          </div>
        </div>
        <button class="btn" @click="onSubmit">SUBMIT</button>
      </div>
    </form>
  </div>
</template>
<script>
import { required, email, numeric, alpha } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: null,
      name: null,
      surname: null,
      age: null,
      phone: null,
      address: null,
      country: null,
      countryList: [],
      phoneError: "",
    };
  },

  validations: {
    email: {
      required,
      email,
    },

    age: {
      required,
      numeric,
    },
    phone: {
      required,
    },
    name: {
      required,
      alpha,
    },
    surname: {
      required,
      alpha,
    },
    address: {
      required,
    },
    country: {
      required,
    },
  },
  watch: {
    phone() {
      this.phoneControl();
    },
  },
  methods: {
    phoneControl: function () {
      let regphone =
        /^\+(90)?[-. ]?([0-9]{3})[-. ]??([0-9]{3})[-. ]?([0-9]{4})$/;
      let regex = RegExp(regphone);
      console.log(!regex.test(this.phone));
      if (!regex.test(this.phone)) {
        this.phoneError = "invalid phone format";
      } else {
        this.phoneError = "";
      }
    },
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
    },
  },
  mounted() {
    this.countryList.push({ id: "1", Name: "Ankara" });
    this.countryList.push({ id: "2", Name: "Samsun" });
    this.countryList.push({ id: "3", Name: "Çanakkale" });
  },
};
</script>
<style lang="scss">
.container {
  display: flex;
  justify-content: center;
}
.form {
  display: grid;
  flex-direction: column;
  &-group {
    display: grid;
    &-label {
      margin: 5px;
      display: flex;
      justify-content: flex-start;
    }
    &-input {
      border-radius: 5px;
      border: 1px solid #d3dedc;
      height: 30px;
      width: 120%;
    }
  }
}
.btn {
  cursor: pointer;
  margin-top: 20px;
  border: 1px solid #d6efed;
  border-radius: 5px;
  width: 120%;
  height: 40px;
  background: linear-gradient(
    90deg,
    rgba(83, 76, 187, 1) 0%,
    rgba(117, 57, 147, 1) 13%,
    rgba(75, 112, 185, 1) 44%,
    rgba(0, 212, 255, 1) 100%
  );
}
.invalid-feedback {
  color: red;
}
</style>
