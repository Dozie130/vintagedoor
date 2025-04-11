
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'sonner';
import { Door } from './data';

interface CartItem {
  door: Door;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (door: Door, quantity?: number) => void;
  removeItem: (doorId: string) => void;
  updateQuantity: (doorId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (door: Door, quantity = 1) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.door.id === door.id);
        
        if (existingItem) {
          set({
            items: currentItems.map(item => 
              item.door.id === door.id 
                ? { ...item, quantity: item.quantity + quantity } 
                : item
            )
          });
          toast.success(`Added ${quantity} more ${door.name} to cart`);
        } else {
          set({ items: [...currentItems, { door, quantity }] });
          toast.success(`Added ${door.name} to cart`);
        }
      },
      
      removeItem: (doorId: string) => {
        const currentItems = get().items;
        const itemToRemove = currentItems.find(item => item.door.id === doorId);
        
        if (itemToRemove) {
          set({ 
            items: currentItems.filter(item => item.door.id !== doorId) 
          });
          toast.info(`Removed ${itemToRemove.door.name} from cart`);
        }
      },
      
      updateQuantity: (doorId: string, quantity: number) => {
        const currentItems = get().items;
        
        if (quantity <= 0) {
          get().removeItem(doorId);
          return;
        }
        
        set({
          items: currentItems.map(item => 
            item.door.id === doorId 
              ? { ...item, quantity } 
              : item
          )
        });
      },
      
      clearCart: () => {
        set({ items: [] });
        toast.info('Cart cleared');
      },
      
      totalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      totalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = item.door.discount 
            ? item.door.price * (1 - item.door.discount / 100) 
            : item.door.price;
          return total + (price * item.quantity);
        }, 0);
      }
    }),
    {
      name: 'vintage-door-cart',
    }
  )
);
