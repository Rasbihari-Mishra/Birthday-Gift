import {
Dialog,
DialogContent,
Button,
Typography
} from "@mui/material";

export default function LoveLetterPopup({
open,
setOpen
}:any) {

return (
<Dialog open={open}>

<DialogContent>

<Typography>

My Dear Princess ❤️

Thank you for making my life beautiful.

🌸 Your smile
🌸 Your kindness
🌸 Your innocence

Everything about you is magical.

🐼❤️

</Typography>

<Button onClick={()=>setOpen(false)}>
Close
</Button>

</DialogContent>

</Dialog>
);

}