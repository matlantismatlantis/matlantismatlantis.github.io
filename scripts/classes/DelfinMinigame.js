class DelfinMinigame extends Scene
{
  constructor()
  {
    super();
    this.dialogBoxes =
    {
      tilbage: new DialogBoxToLobby()
    };
    this.dialogBoxesArr = Object.entries(this.dialogBoxes);
    this.buttons =
    {
      tilbage: new ArrowBack(this.dialogBoxes.tilbage)
    };
    this.buttonsArr = Object.entries(this.buttons);
    this.background = img.background.delfin;


  }

  draw()
  {
    super.draw();
    textSize(100);
    fill(0,255,0);
    text("delfin", 400, 200);
  }

  keybind()
  {
    this.dialogBoxes.tilbage.isActive = true;
  }

}
