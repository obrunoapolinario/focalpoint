import styles from './create-task-form.module.scss'
import { Button } from '@/components/button/button';
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import { useState } from 'react';
import { useModal } from '../modal/modal';
import { useTaskContext } from '../task-provider';

export const CreateTaskForm: React.FC = () => {
  const { closeModal } = useModal();
  const { addTask } = useTaskContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
        addTask(title.trim());
        setTitle('');
        closeModal('createTask');
    }
};
    const [title, setTitle] = useState('');
    return (
        <>
            <form className={styles.create__form} onSubmit={handleSubmit}>
                <div className={styles.create__form__input_container}>
                    <Label>Título</Label>
                    <Input placeholder="Digite" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={styles.create__form__actions_container}>
                    <Button variant='primary' type='submit'>Adicionar</Button>
                    <Button variant='ghost' onClick={() => closeModal('createTask')}>Cancelar</Button>
                </div>
            </form>
        </>
    );
}