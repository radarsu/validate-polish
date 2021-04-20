### General

```ts
import { validatePolish } from 'validate-polish';

if (!validatePolish.pesel(`92060512181`)) {
    throw new Error(`Invalid pesel.`);
}

if (!validatePolish.nip('115667734')) {
    throw new Error(`Invalid nip.`);
}

if (!validatePolish.regon(`1251677`)) {
    throw new Error(`Invalid regon.`);
}

if (!validatePolish.identityCard(`14124142`)) {
    throw new Error(`Invalid identity card.`);
}
```

### Browser

In browser validate-polish package is wrapped twice `validatePolish.validatePolish`.

```html
<script src="https://cdn.jsdelivr.net/npm/validate-polish@latest/dist/index.browser.js"></script>
<script>
    console.log(validatePolish.validatePolish);
</script>
```
