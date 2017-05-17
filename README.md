# pop-up

In order for this plugin to work in older browsers, includ webcomponents.js plugin
&nbsp; https://github.com/webcomponents/webcomponentsjs

<br/><br/>
## How to use it

<br/>

**1. Include css file in header of the page**

```html
<link rel="stylesheet" href="build/ct-pop-up.min.css">
```

**2. Include js file in footer of the page**

```html
<script src="build/ct-pop-up.min.js"></script>
```
**3. Using in html**

```html
<pop-up data-id="example2">
    <pop-up-content>
        <div class="p-header">
            Welcom to my site!
            <pop-up-close></pop-up-close>
        </div>
        <div class="p-body">
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi vitae nisi libero cupiditate alias quam dignissimos quas corporis aspernatur, deleniti, quo modi dicta itaque. Voluptates perspiciatis totam ea quae eius.
            </div>
            <div>
                <pop-up-close>Close</pop-up-close>
            </div>
        </div>
    </pop-up-content>
</pop-up>

<pop-up-open data-id="example">Open Pop-Up</pop-up-open>

```
<br/>
<br/>

## Methods
* `open(callback)` - Opening pop-up
* `close(callback)` - Closed pop-up
<br/>
<br/>

## Attributes
* `data-id` - pop-up id`-required`
<br/>
<br/>

## Global functions
* `closeLastOpenPopUp()` - Closed last opening pop-up
