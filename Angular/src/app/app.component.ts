// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'test';
// }

import { Component, OnInit } from '@angular/core';

@Component({ 
  selector: 'app-root',
//   template: `
//   <header>
//   <div class="header"><img class="logo_header" src="./assets/logo used in header.svg"/></div>
// </header>

// <main>
//   <div class="card">
//     <div class="container">
//       <div class="card_header">
//           <button><img src="./assets/back.svg"/></button>
//           <p class="card_heading">Log in with Quantum</p>
//       </div>
//       <form> 
//       <div class="card_body">
//         <div class="radio_group">
//           <div class="radio_element">
//             <input
//             type="radio"
//             id="District"
//             value="District"
//             name="radio"
//             checked
//           />
//             <p>&nbsp;District</p>
//           </div>
//           <div class="radio_element">
//             <input
//             type="radio"
//             id="Independent School"
//             value="Independent School"
//             name="radio"
//             checked
//           />
//             <p>&nbsp;Independent School</p>
//           </div>
//       </div>
//       <div class="drop-down">
//         <label class="text-muted">State*</label>
//         <select id="State" name="State" required>
//           <option value="1">Alabama</option>
//           <option value="2">2</option>
  
//         </select>
//         <label class="text-muted">District*</label>
//         <select id="District" name="District" required>
//           <option value="1">Alabama School District</option>
//           <option value="2">2</option>
          
//         </select>
//       </div>
//       <div class="Text_input">
//         <input type="text" id="fname" name="fname" placeholder="Username/Email ID*" required><br>
//         <span class="forgot_option"><a href="">FORGOT USERNAME?</a></span>
//       </div>
//       <div class="Text_input">
//         <input type="password" id="fname" name="fname" placeholder="Password*" required><br>
//         <span class="forgot_option"><a href="">FORGOT PASSWORD?</a></span>
//       </div>
//       <div class="Remember_ME">
//         <input type="checkbox" id="Remember_ME" name="Remember_ME" value="Remember_ME">
//         <label for="Remember_text">Remember Me</label><br>
//       </div>
      
//         <button type="submit" class="cta">LOG IN</button>
      
       
//         </div>
//       </form>
//       </div>
//     </div>
// </main>

// <footer>
//   <div class="upper_footer">
//     <a>About </a>
//     <span>&nbsp;|&nbsp;</span>
//     <a> Contact Us</a>
//   </div>
//   <div class="lower_footer">
//     <img src="/assets/logo used in footer.svg"/>
//     <div class="text-muted">&nbsp;|&nbsp;</div>
//     <small> Copyright © 2020-2021 <b>Zeus Systems Pvt. Ltd.</b> All rights reserved.</small>
//   </div>
// </footer>
//   `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // We call a service that gets us the data
  
  }
  
}
