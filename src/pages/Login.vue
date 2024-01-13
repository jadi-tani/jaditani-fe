<template>
  <div class="flex flex-col">
    <img src="/public/image/logo.png" alt="jaditani" class="mx-auto" />
    <el-form
      :model="form"
      label-width="120px"
      label-position="top"
      class="my-auto px-24 mt-5"
    >
      <el-form-item label="Login">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password" type="password" />
      </el-form-item>

      <el-button type="primary" class="w-full rounded-full" @click="onSubmit"
        >Login</el-button
      >
    </el-form>
  </div>
</template>

<route lang="yaml">
meta:
  layout: login
</route>

<script setup>
import { reactive } from "vue";
import { login } from "@/services/auth/login";

const form = reactive({
  name: "",
  password: "",
});

const onSubmit = async () => {
  try {
    const response = await login(form);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
</script>
