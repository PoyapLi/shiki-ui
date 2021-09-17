<template>
  <button class="shiki-button"
          :class="classes"
          :disabled="disabled"
  >
    <span v-if="loading" class="shiki-loadingIndicator"></span>
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  props: {
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'normal',
    },
    level: {
      type: String,
      default: 'normal',
    },
    disabled:{
      type:Boolean,
      default:false,
    },
    loading:{
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const {theme, size, level} = props;
    const classes = computed(() => {
      return {
        [`shiki-theme-${theme}`]: theme,
        [`shiki-size-${size}`]: size,
        [`shiki-level-${level}`]: level,
      };
    });
    return {classes};
  }
};

</script>

<style lang="scss">

$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
$yellow:#f1ca17;
$white:white;
.shiki-button {
  margin-top: 5px;
  box-sizing: border-box;
  height: $h;
  padding: 0 8px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
  &.shiki-theme-primary {
    border-color: $blue;
    box-shadow: none;
    color: $white;
    background: $blue;

    &:hover, &:focus {
      background: darken($blue, 10%);
    }
  }

  &.shiki-theme-dashed {
    box-shadow: none;
    color: $color;
    background: $white;
    border: 1px dashed $border-color;

    &:hover, &:focus {
      color: $blue;
      border-color: $blue;
    }
  }

  &.shiki-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover, &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.shiki-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      background: darken(white, 5%);
    }
  }

  &.shiki-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 12px;

  }

  &.shiki-size-small {
    font-size: 12px;
    height: 24px;
    padding: 0 4px;
  }

  &.shiki-theme-button {
    &.shiki-level-main {
      background: $white;
      color: $color;
      border-color: $border-color;

      &:hover,
      &:focus {
        background: $white;
        color: $blue;
        border-color: darken($blue, 10%);
      }
    }

    &.shiki-level-warning {
      background: $white;
      border-color: $yellow;
      color: $yellow;

      &:hover,
      &:focus {
        background: $white;
        color: darken($yellow, 10%);
        border-color: darken($yellow, 10%);
      }
    }
    &.shiki-level-danger {
      background: $white;
      border-color: $red;
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
        background: $white;
        border-color: darken($red, 10%);
      }
    }
  }
  &.shiki-theme-primary {
    > .shiki-loadingIndicator{
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 8px;
      border-color: $white $white $white transparent;
      border-style: solid;
      border-width: 2px;
      animation: shiki-spin 1s infinite linear;
    }
    &.shiki-level-main {
      background: $blue;
      color: white;
      border-color: $blue;

      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }

    &.shiki-level-warning {
      background: $yellow;
      border-color: $yellow;
      color: white;

      &:hover,
      &:focus {
        background: darken($yellow, 10%);
        border-color: darken($yellow, 10%);
      }
    }
    &.shiki-level-danger {
      background: $red;
      border-color: $red;
      color: white;

      &:hover,
      &:focus {
        color: $white;
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }

  &.shiki-theme-dashed {
    &.shiki-level-main {
      background: $white;
      color: $color;
      border-color: $border-color;

      &:hover,
      &:focus {
        background: $white;
        border-color: $blue;
        color: $blue;
      }
    }

    &.shiki-level-warning {
      background: $white;
      color: $yellow;
      border-color: $yellow;

      &:hover,
      &:focus {
        background: $white;
        border-color: darken($yellow, 10%);
        color: darken($yellow, 10%);
      }
    }
    &.shiki-level-danger {
      background: $white;
      border-color: $red;
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
        background: $white;
        border-color: darken($red, 10%);
      }
    }
  }

  &.shiki-theme-link {
    &.shiki-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
    &.shiki-level-warning {
      color: $yellow;

      &:hover,
      &:focus {
        color: darken($yellow, 10%);
      }
    }
  }

  &.shiki-theme-text {
    &.shiki-level-main {
      color: $blue;

      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }

    &.shiki-level-warning {
      color: $yellow;

      &:hover,
      &:focus {
        color: darken($yellow, 10%);
      }
    }

    &.shiki-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.shiki-theme-button {
    &[disabled] {
      cursor: not-allowed;
      border-color: $grey;
      color: $grey;
      &:hover {
        border-color: lighten($grey, 20%);
        color: lighten($grey, 20%);
      }
    }
  }
  &.shiki-theme-link, &.shiki-theme-text{
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: lighten($grey, 20%);
        color: lighten($grey, 20%);
      }
    }
  }
  &.shiki-theme-dashed{
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      border-color: $grey;
      &:hover {
        border-color: lighten($grey, 20%);
        color: lighten($grey, 20%);
      }
    }
  }
  &.shiki-theme-primary{
    &[disabled] {
      cursor: not-allowed;
      color: $white;
      border-color: $blue;
      &:hover,&:focus{
        border-color: lighten($blue,20%);
        background: lighten($blue,20%);
        color: $white;
      }
    }
  }

  > .shiki-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: shiki-spin 1s infinite linear;
  }
}
@keyframes shiki-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>