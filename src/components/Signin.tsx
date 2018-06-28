import React from "react"

interface IProps {
  defaultEmail?: string
  onSubmit: (email: string, password: string) => void
}

interface IState {
  email: string
  password: string
}

class Signin extends React.Component<IProps, IState> {
  public state: IState = {
    email: this.props.defaultEmail || "",
    password: ""
  }

  public render() {
    const { email, password } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={this.handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={this.handlePasswordChange} />
        </label>
        <button>
          Sign in
        </button>
      </form>
    )
  }

  private handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({ email: e.target.value })
  }

  private handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({ password: e.target.value })
  }

  private handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.email, this.state.password)
  }
}

export default Signin
