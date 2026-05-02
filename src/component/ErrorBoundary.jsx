import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo })
    // You can also log the error to an external service here
    // console.error(error, errorInfo)
  }

  render() {
    const { error, errorInfo } = this.state
    if (error) {
      return (
        <div className='min-h-screen bg-white text-black p-6'>
          <h1 className='text-2xl font-bold mb-4'>An error occurred</h1>
          <p className='mb-4'>The application encountered a runtime error. See details below.</p>
          <div className='overflow-auto max-h-[60vh] p-4 bg-gray-100 border rounded'>
            <pre className='whitespace-pre-wrap text-sm'>{String(error)}{errorInfo && '\n\n' + errorInfo.componentStack}</pre>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
