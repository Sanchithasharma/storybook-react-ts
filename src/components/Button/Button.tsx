import Button from '@mui/material/Button';

type ButtonProps = {
    label: string
}

function TextButton({label}: ButtonProps) {
  return (
    <>
        <Button variant="contained">{label}</Button>
    </>
  )
}

export default TextButton