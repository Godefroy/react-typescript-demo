import React from "react"

interface IProps {
  icon: JSX.Element
  title: React.ComponentType<{ icon: JSX.Element }>
  children: React.ReactNode
}

const Card = ({ icon, title: Title, children }: IProps) => (
  <div>
    <Title icon={icon} />
    {children}
  </div>
)

export default Card
