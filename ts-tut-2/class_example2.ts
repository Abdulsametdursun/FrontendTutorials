class CreditCard {
  public card_number: string;
  public month: number;
  public year: number;
  private secure_code: number = null;

  set_secure_code(new_secure_code: number) {
    if (this.secure_code !== null) {
      throw new Error("You can not reassign secure_code");
    }

    this.secure_code = new_secure_code;
  }
}

function style(style_str: any) {
  console.log("Assigned style: " + style_str);
}

let name2: string = "asd";
let welcome: string = `Welcome ${name2}`;
console.log(welcome);

style`
.text {
  background-color: black;
}
`;
