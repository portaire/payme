function ModalRow({children, size="mb-6",className}:any) {
    return (
        <div className={`${size} ${className  ? className : "" } `.trim()}>
            {children}
        </div>
    )
}

export default ModalRow;