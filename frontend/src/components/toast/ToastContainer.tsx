import React from 'react';
import { useToast } from './ToastContext';
import Toast from './Toast';

const ToastContainer: React.FC = () => {
    const { toasts } = useToast();

    if (toasts.length === 0) return null;

    return (
        <div className="fixed top-4 right-4 z-50 rounded-lg">
            {toasts.map((toast) => (
                <Toast key={toast.id} toast={toast} />
            ))}
        </div>
    );
};

export default ToastContainer;
