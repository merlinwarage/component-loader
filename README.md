# ngx-component-loader

<span style="color:blue">
interface ComponentLoaderInput {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: string;  <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;payload: any;  <br>
}</span><span style="color:blue"><br>
interface ComponentLoaderInterface { <br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;component: Type&lt;any&gt;  <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;componentInitData?: ComponentLoaderInput;  <br>
} </span><br><br>

**EXAMPLE**  

**TS:**  
`import { MyComponent } from '../my-component/my-component.component';`  
`import { ComponentLoaderInput, ComponentLoaderInterface } from '../component-loader/component-loader.component';`  
...  

`export class AppComponent implements OnInit {`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`lazyComponentInput: ComponentLoaderInput;`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`lazyComponent: ComponentLoaderInterface;`  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`ngOnInit(): void {`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`this.lazyComponentInput = [`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`{ name: 'inputName1', payload: 1 },`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`{ name: 'somethingInput', payload: {a:b} }`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`];`  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`this.lazyComponent = { MyComponent, componentInitData: this.lazyComponentInput };`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}`  
`}`  

**Template:**  
`<app-component-loader (done)="onDoneEvent($event)" [data]="lazyComponent">`
`</app-component-loader>`

(done) = @Output, limited to 1
