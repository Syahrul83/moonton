
export default function DangerButton({ type = 'submit', variant = "", className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `rounded-2xl py-[13px] text-center w-full ${processing && "opacity-30"} btn-${variant} ${className}
                `}

            disabled={processing}
        >
            {children}
        </button>
    );
}
