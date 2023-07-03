const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
      <Sum sum={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
    </div>
  )
}

const Header = ({ header }) => (
  <div>
    <h1>{header}</h1>
  </div>
)

const Content = ({ parts }) => (
  <div>
    {parts.map((parts) => <Part key={parts.id} name={parts.name} exercises={parts.exercises} />)}
  </div>
)

const Part = ({ name, exercises }) => {
  return (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}

const Sum = ({ sum }) => (
  <div>
    <b>total of {sum} exercises</b>
  </div>
)

export default Course
