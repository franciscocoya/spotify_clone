import TextInput from "../../inputs/textInput/TextInput"

export default function BaseForm({ ...props }) {
  return (
    <form action="#" method="POST">
      <TextInput label="Email address or username" placeholder="Email address or username" />
    </form>
  )
}