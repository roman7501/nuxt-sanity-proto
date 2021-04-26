<template>
  <div>
    <form action="POST" data-netlify-recaptcha="true" data-netlify="true">
      <div class="form-control">
        <input id="name" type="text" name="name" placeholder="Name" />
      </div>
      <div class="form-control">
        <input id="email" type="email" name="email" placeholder="Email" />
      </div>
      <div class="form-control">
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows="10"
        ></textarea>
      </div>
      <div class="form-control">
        <div data-netlify-recaptcha="true"></div>
      </div>
      <input type="submit" value="Send Message" class="submit-btn" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
}
</script>

<style lang="scss">
.form-control {
  margin-top: 16px;
}

input,
textarea {
  border: 1px solid #fff;
  background: transparent;
  padding: 12px;
  border-radius: 20px;
  width: 100%;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    outline: none;
    background: rgba(0, 0, 0, 0.3);
  }
}
input::placeholder,
textarea::placeholder {
  color: #fff;
}
.submit-btn {
  background: #fff;
  transition: transform 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    background: #fff;
  }
  &:active {
    transform: scale(0.95);
    background: #fff;
  }
}
</style>
