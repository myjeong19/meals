import { useForm } from 'react-hook-form';

export function useSearch() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      searchValue: '',
    },
  });

  const submitHandler = (data: { searchValue: string }): void => {};

  const onSubmit = handleSubmit(submitHandler);

  return { control, onSubmit, errors };
}
