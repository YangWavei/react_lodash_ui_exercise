import type React from "react";
import type { PropsWithChildren } from "react";

interface I_ZModalProp {
  visible?: boolean;
  title?: string;
  closable?: boolean;
  maskClosable?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  okText?: string;
  cancelText?: string;
  width?: number | string;
  centered?: boolean;
  className?: string;
}

const Z_Modal: React.FC<PropsWithChildren<I_ZModalProp>> = ({
  visible = false,
  title = 'Modal Title',
  closable = true,
  maskClosable = true,
  onCancel,
  onOk,
  okText = 'OK',
  cancelText = 'Cancel',
  width = 520,
  centered = false,
  children,
  className = ''
}) => {
  // 如果不可见，不渲染任何内容
  if (!visible) return null;

  // 处理遮罩层点击
  const handleMaskClick = () => {
    if (maskClosable && onCancel) {
      onCancel();
    }
  };

  // 处理关闭按钮点击
  const handleCloseClick = () => {
    onCancel?.();
  };

  // 处理确认按钮点击
  const handleOkClick = () => {
    onOk?.();
  };

  // 处理取消按钮点击
  const handleCancelClick = () => {
    onCancel && onCancel();
  };

  return (
    <div className={`${className} fixed inset-0 z-50 flex items-center justify-center`}>
      {/* 遮罩层 */}
      <div
        className="absolute inset-0 bg-black/20"
        onClick={handleMaskClick}
      />
      {/* Modal 内容 */}
      <div
        className={`
          relative flex flex-col bg-white rounded-lg shadow-lg
          transform translate-y-[-200px]
          ${centered ? 'self-center' : ''}
        `}
        style={{ width }}
      >
        {/* Modal 头部 */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="text-lg font-semibold text-gray-800">
            {title}
          </div>
          {closable && (
            <button
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
              onClick={handleCloseClick}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Modal 内容区域 */}
        <div className="px-6 py-4 text-gray-600">
          {children}
        </div>

        {/* Modal 底部按钮区域 */}
        <div className="flex items-center justify-end px-6 py-4 space-x-2 border-t border-gray-200">
          <button
            className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none"
            onClick={handleCancelClick}
          >
            {cancelText}
          </button>
          <button
            className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
            onClick={handleOkClick}
          >
            {okText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Z_Modal;
