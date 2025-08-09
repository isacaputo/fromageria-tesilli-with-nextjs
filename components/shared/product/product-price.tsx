import { cn } from '@/lib/utils';

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const stringValue = value.toFixed(2);
  const [intPart, floatPart] = stringValue.split('.');

  return (
    <p className={cn('text-2-xl', className)}>
      <span className='text-xs align-super'>R$</span>
      {intPart}
      <span className='text-xs align-super'>.{floatPart}</span>
    </p>
  );
};

export default ProductPrice;
